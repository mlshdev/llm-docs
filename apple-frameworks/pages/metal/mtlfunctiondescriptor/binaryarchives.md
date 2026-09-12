> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctiondescriptor/binaryarchives](https://developer.apple.com/documentation/metal/mtlfunctiondescriptor/binaryarchives)

# binaryArchives (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The binary archives to search for a previously-compiled version of this function.

## Declaration

```swift
var binaryArchives: [any MTLBinaryArchive]? { get set }
```

## Mentioned In

- [Compiling binary archives from a custom configuration script](../compiling-binary-archives-from-a-custom-configuration-script.md)

<a id="discussion"></a>

## Discussion

If you specify an archive that includes a fully compiled version of this function, Metal uses the compiled version rather than creating a new one.

## See Also

### Specifying the function configuration

- [name](name.md): The name of the function to fetch from the library.
- [specializedName](specializedname.md): A new name for the created function object.
- [constantValues](constantvalues.md): The set of constant values assigned to the function constants.
- [options](options.md): Flags specifying how Metal should create the new function object.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](../mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.

# binaryArchives (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The binary archives to search for a previously-compiled version of this function.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTLBinaryArchive>> * binaryArchives;
```

## Mentioned In

- [Compiling binary archives from a custom configuration script](../compiling-binary-archives-from-a-custom-configuration-script.md)

<a id="discussion"></a>

## Discussion

If you specify an archive that includes a fully compiled version of this function, Metal uses the compiled version rather than creating a new one.

## See Also

### Specifying the function configuration

- [name](name.md): The name of the function to fetch from the library.
- [specializedName](specializedname.md): A new name for the created function object.
- [constantValues](constantvalues.md): The set of constant values assigned to the function constants.
- [options](options.md): Flags specifying how Metal should create the new function object.
- [MTLFunctionOptions](../mtlfunctionoptions.md): Options that define how Metal compiles a GPU function.
- [MTLLinkedFunctions](../mtllinkedfunctions.md): A set of related functions that Metal links to when necessary to create the function instance.
