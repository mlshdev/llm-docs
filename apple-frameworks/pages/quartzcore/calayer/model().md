> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/model()](https://developer.apple.com/documentation/quartzcore/calayer/model())

# model() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the model layer object associated with the receiver, if any.

## Declaration

```swift
func model() -> Self
```

<a id="return-value"></a>

## Return Value

A layer instance representing the underlying model layer.

<a id="Discussion"></a>

## Discussion

Calling this method on a layer in the presentation tree returns the corresponding layer object in the model tree. This method returns a value only when a transaction involving changes to the presentation layer is in progress. If no transaction is in progress, the results of calling this method are undefined.

## See Also

### Accessing related layer objects

- [presentation()](presentation%28%29.md): Returns a copy of the presentation layer object that represents the state of the layer as it currently appears onscreen.

# modelLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the model layer object associated with the receiver, if any.

## Declaration

```objectivec
- (instancetype) modelLayer;
```

<a id="return-value"></a>

## Return Value

A layer instance representing the underlying model layer.

<a id="Discussion"></a>

## Discussion

Calling this method on a layer in the presentation tree returns the corresponding layer object in the model tree. This method returns a value only when a transaction involving changes to the presentation layer is in progress. If no transaction is in progress, the results of calling this method are undefined.

## See Also

### Accessing related layer objects

- [presentationLayer](presentation%28%29.md): Returns a copy of the presentation layer object that represents the state of the layer as it currently appears onscreen.
