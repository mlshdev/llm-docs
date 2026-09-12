> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctiondescriptor/constantvalues](https://developer.apple.com/documentation/metal/mtlfunctiondescriptor/constantvalues)

# constantValues (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The set of constant values assigned to the function constants.

## Declaration

```swift
@NSCopying var constantValues: MTLFunctionConstantValues? { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If you are creating a function object for a specialized function, you need to provide an array of valid constant values for all required function constants.

## See Also

### Specifying the function configuration

- [name](name.md): The name of the function to fetch from the library.
- [specializedName](specializedname.md): A new name for the created function object.
- [options](options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](../mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.

# constantValues (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The set of constant values assigned to the function constants.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MTLFunctionConstantValues * constantValues;
```

<a id="discussion"></a>

## Discussion

The default value is `nil`. If you are creating a function object for a specialized function, you need to provide an array of valid constant values for all required function constants.

## See Also

### Specifying the function configuration

- [name](name.md): The name of the function to fetch from the library.
- [specializedName](specializedname.md): A new name for the created function object.
- [options](options.md): Flags specifying how Metal should create the new function object.
- [binaryArchives](binaryarchives.md): The binary archives to search for a previously-compiled version of this function.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](../mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.
