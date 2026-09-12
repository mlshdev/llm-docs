> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdataasset/init(name:bundle:)](https://developer.apple.com/documentation/appkit/nsdataasset/init(name:bundle:))

# init(name:bundle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Initializes and returns an object with a reference to the named data asset that’s in an asset catalog in the specified bundle.

## Declaration

```swift
init?(name: NSDataAsset.Name, bundle: Bundle)
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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

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
