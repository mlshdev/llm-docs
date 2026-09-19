> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritem/copy(with:)

# copy(with:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a copy of the object with the specified zone.

## Declaration

```swift
nonisolated func copy(with zone: NSZone? = nil) -> Any
```

## Parameters

- `zone`: The system ignores this parameter.

<a id="return-value"></a>

## Return Value

A copy of the original asset instance.

## See Also

### Copying an player item

- [copy()](copy%28%29.md): Creates a copy of the object.

# copyWithZone: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a copy of the object with the specified zone.

## Declaration

```objectivec
- (id) copyWithZone:(NSZone *) zone;
```

## Parameters

- `zone`: The system ignores this parameter.

<a id="return-value"></a>

## Return Value

A copy of the original asset instance.

## See Also

### Copying an player item

- [copy](copy%28%29.md): Creates a copy of the object.
