# 57Package

Hello! This script loops over deeply nested objects in order to find certain keys/values and implement certain _operations_ over them. <br>


### Principal Method:
```
findKeyValueInObject(mockObject, "keyName", "instruction");
```

### Parameter description:

+ mockObject: This is the object you wish this script to iterate over.
+ keyName: The name of the particular key you wish to search for.
+ instruction: A certain instruction for this script to perform one of 4 _operations_

### Available instructions:
+ "largest":    This looks for a key whose value must be a numbered array. __It returns its biggest value.__
+ "pow":        This looks for a key whose value must be a number. __It returns the number raised to the power of 3.__
+ "backwards":  This looks for a key whose value must be a string. __It returns the same string but reversed.__
+ "quote":      This __does not__ look for any particular key, yet it returns a good, inspiring quote. For any user to add to their particular object...

### Running this script:

Clone this repo and go to its root. Then, run:

```
npm run dev
```
Go to the "Principal Mehtod" and edit its contents.
<br>
Be sure to check the __mocks.js__ file. You may include there the object of your preference. It's already imported in the main file.

<br>
*Due to time constraints I wasn't able to set this up as an actual npm package. 
