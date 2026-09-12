> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchcontroller/init(searchresultscontroller:)](https://developer.apple.com/documentation/uikit/uisearchcontroller/init(searchresultscontroller:))

# init(searchResultsController:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a search controller with the specified view controller for displaying the results.

## Declaration

```swift
init(searchResultsController: UIViewController?)
```

## Parameters

- `searchResultsController`: The view controller that displays the search results. Specify `nil` if you want to display the search results in the same view controller that displays your searchable content. For apps running in tvOS, provide a results controller because tvOS doesn’t accept `nil` as a valid argument.

<a id="return-value"></a>

## Return Value

An initialized search controller.

<a id="Discussion"></a>

## Discussion

After creating the search controller, always assign an object to the [searchResultsUpdater](searchresultsupdater.md) property. The search controller uses that object to update the search results.

## See Also

### Creating a search controller

- [init(coder:)](init%28coder_%29.md): Returns an initialized search controller from data in the specified unarchiver.
- [init(nibName:bundle:)](init%28nibname_bundle_%29.md): Returns an initialized view controller with the nib file in the specified bundle.

# initWithSearchResultsController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and returns a search controller with the specified view controller for displaying the results.

## Declaration

```objectivec
- (instancetype) initWithSearchResultsController:(UIViewController *) searchResultsController;
```

## Parameters

- `searchResultsController`: The view controller that displays the search results. Specify `nil` if you want to display the search results in the same view controller that displays your searchable content. For apps running in tvOS, provide a results controller because tvOS doesn’t accept `nil` as a valid argument.

<a id="return-value"></a>

## Return Value

An initialized search controller.

<a id="Discussion"></a>

## Discussion

After creating the search controller, always assign an object to the [searchResultsUpdater](searchresultsupdater.md) property. The search controller uses that object to update the search results.

## See Also

### Creating a search controller

- [initWithCoder:](init%28coder_%29.md): Returns an initialized search controller from data in the specified unarchiver.
- [initWithNibName:bundle:](init%28nibname_bundle_%29.md): Returns an initialized view controller with the nib file in the specified bundle.
