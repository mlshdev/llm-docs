> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctiondescriptor/name](https://developer.apple.com/documentation/metal/mtlfunctiondescriptor/name)

# name (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The name of the function to fetch from the library.

## Declaration

```swift
var name: String? { get set }
```

## See Also

### Specifying the function configuration

- [specializedName](specializedname.md): A new name for the created function object.
- [constantValues](constantvalues.md): The set of constant values assigned to the function constants.
- [options](options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](../mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.

# name (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The name of the function to fetch from the library.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * name;
```

## See Also

### Specifying the function configuration

- [specializedName](specializedname.md): A new name for the created function object.
- [constantValues](constantvalues.md): The set of constant values assigned to the function constants.
- [options](options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](../mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.
