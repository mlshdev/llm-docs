> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4argumenttabledescriptor/maxbufferbindcount

# maxBufferBindCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the number of buffer-binding slots for the argument table.

## Declaration

```swift
var maxBufferBindCount: Int { get set }
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The maximum value of this parameter is 31.

# maxBufferBindCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the number of buffer-binding slots for the argument table.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger maxBufferBindCount;
```

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

<a id="discussion"></a>

## Discussion

The maximum value of this parameter is 31.
