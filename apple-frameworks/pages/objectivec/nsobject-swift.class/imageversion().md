> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/imageversion()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imageversion())

# imageVersion() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the version of the item.

## Declaration

```swift
func imageVersion() -> Int
```

<a id="return-value"></a>

## Return Value

The version of the item.

<a id="Discussion"></a>

## Discussion

This method is optional. The receiver can return a new version to let the image browser know that it should not use its cache for the item.

# imageVersion (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns the version of the item.

## Declaration

```objectivec
- (NSUInteger) imageVersion;
```

<a id="return-value"></a>

## Return Value

The version of the item.

<a id="Discussion"></a>

## Discussion

This method is optional. The receiver can return a new version to let the image browser know that it should not use its cache for the item.
