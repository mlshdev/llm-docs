> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacecreating/resourceurl(name:)](https://developer.apple.com/documentation/tvmlkit/tvinterfacecreating/resourceurl(name:))

# resourceURL(name:) (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a URL for the given resource.

> Please use SwiftUI or UIKit

## Declaration

```swift
optional func resourceURL(name resourceName: String) -> URL?
```

## Parameters

- `resourceName`: A string that contains the name of the resource.

<a id="return-value"></a>

## Return Value

The URL associated with the resource name. The app must return `nil` if the event is not handled.

<a id="Discussion"></a>

## Discussion

The `resourceName` parameter comes from a resource URL specified in certain elements. For example, `badge src="resource://developer-resource">` contains the resource name, `developer-resource`.

## See Also

### Retrieving Resource Information

- [resourceImage(name:)](resourceimage%28name_%29.md): Deprecated. Returns the image for the given resource

# URLForResource: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Returns a URL for the given resource.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
- (NSURL *) URLForResource:(NSString *) resourceName;
```

## Parameters

- `resourceName`: A string that contains the name of the resource.

<a id="return-value"></a>

## Return Value

The URL associated with the resource name. The app must return `nil` if the event is not handled.

<a id="Discussion"></a>

## Discussion

The `resourceName` parameter comes from a resource URL specified in certain elements. For example, `badge src="resource://developer-resource">` contains the resource name, `developer-resource`.

## See Also

### Retrieving Resource Information

- [imageForResource:](resourceimage%28name_%29.md): Deprecated. Returns the image for the given resource
