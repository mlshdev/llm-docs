> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imagerepresentation()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagerepresentation())

# imageRepresentation() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the image to display.

## Declaration

```swift
func imageRepresentation() -> Any!
```

<a id="return-value"></a>

## Return Value

The image to display; can return `nil` if the item has no image to display.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. This method  is called frequently, so the receiver should cache the returned instance.

# imageRepresentation (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the image to display.

## Declaration

```objectivec
- (id) imageRepresentation;
```

<a id="return-value"></a>

## Return Value

The image to display; can return `nil` if the item has no image to display.

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. This method  is called frequently, so the receiver should cache the returned instance.
