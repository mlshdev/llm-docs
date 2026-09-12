> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/init(nibname:bundle:)](https://developer.apple.com/documentation/uikit/uisearchcontroller/init(nibname:bundle:))

# init(nibName:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an initialized view controller with the nib file in the specified bundle.

## Declaration

```swift
init(nibName nibNameOrNil: String?, bundle nibBundleOrNil: Bundle?)
```

## Parameters

- `nibNameOrNil`: The name of the nib file to associate with the view controller. The nib file name shouldn’t contain any leading path information. If you specify `nil`, the `nibName` property is set to `nil`.
- `nibBundleOrNil`: The bundle in which to search for the nib file. This method looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

## See Also

### Creating a search controller

- [init(searchResultsController:)](init%28searchresultscontroller_%29.md): Creates and returns a search controller with the specified view controller for displaying the results.
- [init(coder:)](init%28coder_%29.md): Returns an initialized search controller from data in the specified unarchiver.

# initWithNibName:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an initialized view controller with the nib file in the specified bundle.

## Declaration

```objectivec
- (instancetype) initWithNibName:(NSString *) nibNameOrNil bundle:(NSBundle *) nibBundleOrNil;
```

## Parameters

- `nibNameOrNil`: The name of the nib file to associate with the view controller. The nib file name shouldn’t contain any leading path information. If you specify `nil`, the `nibName` property is set to `nil`.
- `nibBundleOrNil`: The bundle in which to search for the nib file. This method looks for the nib file in the bundle’s language-specific project directories first, followed by the Resources directory.

## See Also

### Creating a search controller

- [initWithSearchResultsController:](init%28searchresultscontroller_%29.md): Creates and returns a search controller with the specified view controller for displaying the results.
- [initWithCoder:](init%28coder_%29.md): Returns an initialized search controller from data in the specified unarchiver.
