> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityelement/init(accessibilitycontainer:)](https://developer.apple.com/documentation/uikit/uiaccessibilityelement/init(accessibilitycontainer:))

# init(accessibilityContainer:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and initializes an accessibility element to represent an item in the specified container.

## Declaration

```swift
init(accessibilityContainer container: Any)
```

## Parameters

- `container`: The view that contains the accessibility element.

<a id="return-value"></a>

## Return Value

An accessibility element to represent a non-view item in the container.

<a id="Discussion"></a>

## Discussion

In general, you do not create accessibility elements for items in your application because standard UIKit controls and views are accessible by default. However, if you have a view that contains nonview items, such as icons or text images, that need to be accessible to users with disabilities, you create accessibility elements to represent them. In this case, the containing view should implement the UIAccessibilityContainer informal protocol and use this method to create an accessibility element to represent each item that should be exposed to an assistive application.

# initWithAccessibilityContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates and initializes an accessibility element to represent an item in the specified container.

## Declaration

```objectivec
- (instancetype) initWithAccessibilityContainer:(id) container;
```

## Parameters

- `container`: The view that contains the accessibility element.

<a id="return-value"></a>

## Return Value

An accessibility element to represent a non-view item in the container.

<a id="Discussion"></a>

## Discussion

In general, you do not create accessibility elements for items in your application because standard UIKit controls and views are accessible by default. However, if you have a view that contains nonview items, such as icons or text images, that need to be accessible to users with disabilities, you create accessibility elements to represent them. In this case, the containing view should implement the UIAccessibilityContainer informal protocol and use this method to create an accessibility element to represent each item that should be exposed to an assistive application.
