const greet = require('./app');

if (greet() ==="Hello from DevOps!")
{
    console.log("Test Passed");
    ProcessingInstruction.exit(0);
}
else
{
    console.log("Test Failed");
    ProcessingInstruction.exit(1);
}