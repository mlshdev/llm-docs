> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructtype/members](https://developer.apple.com/documentation/metal/mtlstructtype/members)

# members (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of instances that describe the fields in the struct.

## Declaration

```swift
var members: [MTLStructMember] { get }
```

<a id="discussion"></a>

## Discussion

Each array element in [members](members.md) is an [MTLStructMember](../mtlstructmember.md) instance that corresponds to one of the fields in the struct.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Obtaining information about struct members

- [memberByName(\_:)](memberbyname%28__%29.md): Provides a representation of a struct member.

# members (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An array of instances that describe the fields in the struct.

## Declaration

```objectivec
@property (readonly) NSArray<MTLStructMember *> * members;
```

<a id="discussion"></a>

## Discussion

Each array element in [members](members.md) is an [MTLStructMember](../mtlstructmember.md) instance that corresponds to one of the fields in the struct.

## See Also

### Related Documentation

- [Metal Shading Language Guide](https://developer.apple.com/library/archive/documentation/Metal/Reference/MetalShadingLanguageGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014364)
- [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221)

### Obtaining information about struct members

- [memberByName:](memberbyname%28__%29.md): Provides a representation of a struct member.
