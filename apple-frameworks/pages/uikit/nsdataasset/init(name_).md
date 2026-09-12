> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdataasset/init(name:)](https://developer.apple.com/documentation/uikit/nsdataasset/init(name:))

# init(name:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an object with a reference to the named data asset in an asset catalog.

## Declaration

```swift
convenience init?(name: NSDataAssetName)
```

## Parameters

- `name`: The name of the data set in the asset catalog.

<a id="return-value"></a>

## Return Value

The data asset object for the named data set, or `nil` if the data set is not found.

<a id="Discussion"></a>

## Discussion

If there are multiple data files in the named data set, this method returns the one with attributes that most closely match the current device available screen space.

This method looks in the asset catalog, in the main bundle for the named data set.

## See Also

### Initializing the data asset

- [init(name:bundle:)](init%28name_bundle_%29.md): Initializes and returns an object with a reference to the named data asset that’s in an asset catalog in the specified bundle.

# initWithName: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an object with a reference to the named data asset in an asset catalog.

## Declaration

```objectivec
- (instancetype) initWithName:(NSDataAssetName) name;
```

## Parameters

- `name`: The name of the data set in the asset catalog.

<a id="return-value"></a>

## Return Value

The data asset object for the named data set, or `nil` if the data set is not found.

<a id="Discussion"></a>

## Discussion

If there are multiple data files in the named data set, this method returns the one with attributes that most closely match the current device available screen space.

This method looks in the asset catalog, in the main bundle for the named data set.

## See Also

### Initializing the data asset

- [initWithName:bundle:](init%28name_bundle_%29.md): Initializes and returns an object with a reference to the named data asset that’s in an asset catalog in the specified bundle.
