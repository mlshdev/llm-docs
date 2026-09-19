> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imagerepresentationtype()

# imageRepresentationType() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the representation type of the image to display.

## Declaration

```swift
func imageRepresentationType() -> String!
```

<a id="return-value"></a>

## Return Value

A string that specifies the image representation type. The string can be any of the constants defined in [Image Representation Types](https://developer.apple.com/documentation/quartz/image-representation-types).

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.

# imageRepresentationType (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the representation type of the image to display.

## Declaration

```objectivec
- (NSString *) imageRepresentationType;
```

<a id="return-value"></a>

## Return Value

A string that specifies the image representation type. The string can be any of the constants defined in [Image Representation Types](https://developer.apple.com/documentation/quartz/image-representation-types).

<a id="Discussion"></a>

## Discussion

Your data source must implement this method.
