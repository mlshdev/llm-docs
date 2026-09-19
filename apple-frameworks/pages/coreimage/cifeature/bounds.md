> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/cifeature/bounds

# bounds (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

The rectangle that holds discovered feature.

## Declaration

```swift
var bounds: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle is in the coordinate system of the image.

## See Also

### Feature Properties

- [type](type.md): The type of feature that was discovered.

# bounds (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

The rectangle that holds discovered feature.

## Declaration

```objectivec
@property (assign, readonly) CGRect bounds;
```

<a id="Discussion"></a>

## Discussion

The rectangle is in the coordinate system of the image.

## See Also

### Feature Properties

- [type](type.md): The type of feature that was discovered.
