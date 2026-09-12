> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4argumenttabledescriptor/maxtexturebindcount](https://developer.apple.com/documentation/metal/mtl4argumenttabledescriptor/maxtexturebindcount)

# maxTextureBindCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the number of texture-binding slots for the argument table.

## Declaration

```swift
var maxTextureBindCount: Int { get set }
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The maximum value of this parameter is 128.

# maxTextureBindCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the number of texture-binding slots for the argument table.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxTextureBindCount;
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The maximum value of this parameter is 128.
