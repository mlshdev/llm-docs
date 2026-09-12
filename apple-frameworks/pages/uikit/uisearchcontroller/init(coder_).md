> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/init(coder:)](https://developer.apple.com/documentation/uikit/uisearchcontroller/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an initialized search controller from data in the specified unarchiver.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

An initialized search controller, or `nil` if the coder doesn’t define a search controller.

## See Also

### Creating a search controller

- [init(searchResultsController:)](init%28searchresultscontroller_%29.md): Creates and returns a search controller with the specified view controller for displaying the results.
- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Returns an initialized view controller with the nib file in the specified bundle.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an initialized search controller from data in the specified unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: An unarchiver object.

<a id="return-value"></a>

## Return Value

An initialized search controller, or `nil` if the coder doesn’t define a search controller.

## See Also

### Creating a search controller

- [initWithSearchResultsController:](init%28searchresultscontroller_%29.md): Creates and returns a search controller with the specified view controller for displaying the results.
- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Returns an initialized view controller with the nib file in the specified bundle.
