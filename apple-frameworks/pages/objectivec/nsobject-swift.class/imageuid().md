> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/imageuid()

# imageUID() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns a unique string that identifies the data source item.

## Declaration

```swift
func imageUID() -> String!
```

<a id="return-value"></a>

## Return Value

The string that identifies the data source item

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. The image browser view uses this identifier to associate the data source item and  its cache.

# imageUID (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Returns a unique string that identifies the data source item.

## Declaration

```objectivec
- (NSString *) imageUID;
```

<a id="return-value"></a>

## Return Value

The string that identifies the data source item

<a id="Discussion"></a>

## Discussion

Your data source must implement this method. The image browser view uses this identifier to associate the data source item and  its cache.
