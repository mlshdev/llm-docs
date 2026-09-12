> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdataasset/init(name:bundle:)](https://developer.apple.com/documentation/uikit/nsdataasset/init(name:bundle:))

# init(name:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an object with a reference to the named data asset that’s in an asset catalog in the specified bundle.

## Declaration

```swift
init?(name: NSDataAssetName, bundle: Bundle)
```

## Parameters

- `name`: The name of the data set in the asset catalog.
- `bundle`: The bundle used to store the asset catalog. Pass `nil` for the main bundle. The bundle must be the same as the one used in the Xcode project.

<a id="return-value"></a>

## Return Value

The data asset object for the named data set in the specified bundle, or `nil` if the data set is not found.

<a id="Discussion"></a>

## Discussion

If there are multiple data files in the named data set, this method returns the one with attributes that most closely match the current device available screen space.

This method looks in the asset catalog, in the bundle specified by the `bundle` parameter for the named data set.

## See Also

### Initializing the data asset

- [init(name:)](init%28name_%29.md): Initializes and returns an object with a reference to the named data asset in an asset catalog.

# initWithName:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns an object with a reference to the named data asset that’s in an asset catalog in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithName:(NSDataAssetName) name bundle:(NSBundle *) bundle;
```

## Parameters

- `name`: The name of the data set in the asset catalog.
- `bundle`: The bundle used to store the asset catalog. Pass `nil` for the main bundle. The bundle must be the same as the one used in the Xcode project.

<a id="return-value"></a>

## Return Value

The data asset object for the named data set in the specified bundle, or `nil` if the data set is not found.

<a id="Discussion"></a>

## Discussion

If there are multiple data files in the named data set, this method returns the one with attributes that most closely match the current device available screen space.

This method looks in the asset catalog, in the bundle specified by the `bundle` parameter for the named data set.

## See Also

### Initializing the data asset

- [initWithName:](init%28name_%29.md): Initializes and returns an object with a reference to the named data asset in an asset catalog.
