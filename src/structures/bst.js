export class Node {
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class BST {
    constructor()
    {
        this.root = null;
    }

    add(data)
    {
        if(this.root === null)
        {
            this.root = new Node(data)
            return true;
        }
        
        //Node being passed in is never going to be null
        const addToTree = (data, node) =>
        {
            if(node.data === data)
            {
                return true;
            }
            else if(node.data > data )
            {
                if(node.left === null)
                {
                    node.left = new Node();
                    return true;
                }
                
                return addToTree(data, node.left)
            }

            if(node.data < data)
            {
                return addToTree(data, node.right)
            }
        }

        return addToTree(data, this.root)
    }
    
    isPresent(data)
    {

    }

    findMin()
    {

    }

    findMax()
    {

    }

    find(data)
    {

    }

    remove(data)
    {

    }

    isBalanced()
    {

    }

    findMinHeight()
    {

    }

    findMaxHeight()
    {

    }

    inOrder()
    {

    }

    preOrder()
    {

    }

    postOrder()
    {

    }
}