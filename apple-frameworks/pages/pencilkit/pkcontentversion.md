> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcontentversion](https://developer.apple.com/documentation/pencilkit/pkcontentversion)

# PKContentVersion (Swift)

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

Constants that represent versions of PencilKit for backward compatibility.

## Declaration

```swift
enum PKContentVersion
```

## Mentioned In

- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)

## Topics

### Latest version

- [latest](pkcontentversion/latest.md): A property that returns latest version of PencilKit, which supports all currently available inks.

### Specific versions

- [PKContentVersion.version1](pkcontentversion/version1.md): The PencilKit version that supports inks from iPadOS 14 and earlier, including marker, pen, and pencil.
- [PKContentVersion.version2](pkcontentversion/version2.md): The PencilKit version that supports inks from iPadOS 17 and earlier, including marker, pen, pencil, monoline, fountain pen, watercolor, and crayon.
- [PKContentVersion.version3](pkcontentversion/version3.md): The PencilKit version that supports barrel-roll angle data in inks.
- [PKContentVersion.version4](pkcontentversion/version4.md): The version that adds the Reed Pen ink.
- [PKContentVersion.version5](pkcontentversion/version5.md): The version that adds stroke render state support.

### Initializers

- [init(rawValue:)](pkcontentversion/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Backward compatibility

- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md): Leverage the latest PencilKit features while providing a good user experience in earlier versions of the OS that don’t support those features.

# PKContentVersion (Objective-C)

**Framework:** PencilKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Constants that represent versions of PencilKit for backward compatibility.

## Declaration

```objectivec
enum PKContentVersion : NSInteger;
```

## Mentioned In

- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md)

## Topics

### Latest version

- [PKContentVersionLatest](pkcontentversion/latest.md): A property that returns latest version of PencilKit, which supports all currently available inks.

### Specific versions

- [PKContentVersion1](pkcontentversion/version1.md): The PencilKit version that supports inks from iPadOS 14 and earlier, including marker, pen, and pencil.
- [PKContentVersion2](pkcontentversion/version2.md): The PencilKit version that supports inks from iPadOS 17 and earlier, including marker, pen, pencil, monoline, fountain pen, watercolor, and crayon.
- [PKContentVersion3](pkcontentversion/version3.md): The PencilKit version that supports barrel-roll angle data in inks.
- [PKContentVersion4](pkcontentversion/version4.md): The version that adds the Reed Pen ink.
- [PKContentVersion5](pkcontentversion/version5.md): The version that adds stroke render state support.

## See Also

### Backward compatibility

- [Supporting backward compatibility for ink types](supporting-backward-compatibility-for-ink-types.md): Leverage the latest PencilKit features while providing a good user experience in earlier versions of the OS that don’t support those features.
