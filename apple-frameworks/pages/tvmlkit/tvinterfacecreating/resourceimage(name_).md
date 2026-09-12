> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacecreating/resourceimage(name:)](https://developer.apple.com/documentation/tvmlkit/tvinterfacecreating/resourceimage(name:))

# resourceImage(name:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns the image for the given resource

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func resourceImage(name resourceName: String) -> UIImage?
```

## Parameters

- `resourceName`: A string that contains the name of the resource.

<a id="return-value"></a>

## Return Value

The [UIImage](../../uikit/uiimage.md) associated with the resource name. Returns `nil` if no image matches the resource name or if the event is not handled.

<a id="Discussion"></a>

## Discussion

The `resourceName` parameter comes from a resource URL specified in certain elements. For example, ```<``badge src="resource://developer-resource">``` contains the resource name, `developer-resource`.

## See Also

### Retrieving Resource Information

- [resourceURL(name:)](resourceurl%28name_%29.md): Deprecated. Returns a URL for the given resource.

# imageForResource: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns the image for the given resource

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (UIImage *) imageForResource:(NSString *) resourceName;
```

## Parameters

- `resourceName`: A string that contains the name of the resource.

<a id="return-value"></a>

## Return Value

The [UIImage](../../uikit/uiimage.md) associated with the resource name. Returns `nil` if no image matches the resource name or if the event is not handled.

<a id="Discussion"></a>

## Discussion

The `resourceName` parameter comes from a resource URL specified in certain elements. For example, ```<``badge src="resource://developer-resource">``` contains the resource name, `developer-resource`.

## See Also

### Retrieving Resource Information

- [URLForResource:](resourceurl%28name_%29.md): Deprecated. Returns a URL for the given resource.
