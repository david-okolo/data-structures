const expect = require("chai").expect;
import { BST, Node } from "../src/structures/bst";


describe(`Binary Search Tree`, ()=>
{
    describe(`Initialization Tests`, ()=>
    {
        it(`should create empty node`, () =>
        {
            let node = new Node(10);
            expect(node instanceof Node).to.be.true;
            expect(node.data).to.equal(10);
            expect(node.left).to.be.null;
            expect(node.right).to.be.null;
        });

        it(`should create empty tree`, () =>
        {
            let tree = new BST();
            expect(tree instanceof BST).to.be.true;
            expect(tree.root).to.be.null;
        });
    });

    describe(`Method Tests`, ()=>
    {
        describe(`Add Nodes`, ()=>
        {
            it(`should add nodes`, () =>
            {
                let tree = new BST();
                expect(tree.add(10)).to.be.true;
                expect(tree.add(20)).to.be.true;
                expect(tree.add(6)).to.be.true;
            });
        });

        describe(`Find And Remove Nodes`, ()=>
        {
            before(()=>
            {
                let tree = new BST();
                tree.add(10);
                tree.add(20);
                tree.add(6);
                tree.add(40);
                tree.add(30);
                tree.add(9);
                tree.add(5);
            })

            it(`should find extremes`, ()=>
            {
                expect(tree.findMin()).to.equal(5)
                expect(tree.findMax()).to.equal(40)
            })

            it(`should find nodes`, () =>
            {

                expect(tree.isPresent(10)).to.be.true;
                expect(tree.isPresent(20)).to.be.true;
                expect(tree.isPresent(6)).to.be.true;
                expect(tree.find(10)).to.be.true;
                expect(tree.find(20)).to.be.true;
                expect(tree.find(6)).to.be.true;
                expect(tree.isPresent(30)).to.be.false;
                expect(tree.find(30)).to.be.null;
            });

            it(`should remove nodes`, () =>
            {
                expect(tree.remove(10)).to.be.true;
                expect(tree.remove(20)).to.be.true;
                expect(tree.remove(6)).to.be.true;
                expect(tree.isPresent(10)).to.be.false;
                expect(tree.isPresent(20)).to.be.false;
                expect(tree.isPresent(6)).to.be.false;
            });
        });

        describe(`Tree Traversal`, ()=>
        {
            beforeEach(()=>
            {
                let tree = new BST();
                tree.add(20);
                tree.add(10);
                tree.add(30);
                tree.add(5);
                tree.add(15);
                tree.add(35);
                tree.add(25);
                tree.add(7);
                tree.add(37);
            })

            it(`should return balanced tree stats`, () => {
                expect(tree.isBalanced()).to.be.true;
                expect(tree.findMaxHeight()).to.equal(3);
                expect(tree.findMinHeight()).to.equal(2);
            })

            it(`should return unbalanced tree stats`, () => {
                tree.remove(15);
                expect(tree.isBalanced()).to.be.false;
                expect(tree.findMaxHeight()).to.equal(3);
                expect(tree.findMinHeight()).to.equal(1);
            })

            it(`should traverse in different orders`, ()=>
            {
                expect(tree.inOrder()).to.equal([5,7,10,15,20,25,30,35,37]);
                expect(tree.preOrder()).to.equal([20,10,5,7,15,30,25,35,37]);
                expect(tree.postOrder()).to.equal([7,5,15,10,25,37,35,30,20]);
            })
        })
    });
})