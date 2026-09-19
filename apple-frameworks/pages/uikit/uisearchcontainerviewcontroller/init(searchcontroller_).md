> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisearchcontainerviewcontroller/init(searchcontroller:)

# init(searchController:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a search container view controller with the specified search controller object.

## Declaration

```swift
init(searchController: UISearchController)
```

## Parameters

- `searchController`: The search controller managing the search results. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized search container view controller.

<a id="Discussion"></a>

## Discussion

After initializing the search container view controller, embed it in your container view controller normally.

# initWithSearchController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Initializes and returns a search container view controller with the specified search controller object.

## Declaration

```objectivec
- (instancetype) initWithSearchController:(UISearchController *) searchController;
```

## Parameters

- `searchController`: The search controller managing the search results. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized search container view controller.

<a id="Discussion"></a>

## Discussion

After initializing the search container view controller, embed it in your container view controller normally.
