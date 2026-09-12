> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/dismissnavigationalert(animated:completion:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/dismissnavigationalert(animated:completion:))

# dismissNavigationAlert(animated:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the map template to dismiss the visable navigation alert.

## Declaration

```swift
func dismissNavigationAlert(animated: Bool, completion: @escaping (Bool) -> Void)
```

```swift
func dismissNavigationAlert(animated: Bool) async -> Bool
```

## Parameters

- `animated`: Determines whether the system should animate the dismissal of the navigation alert. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal.
- `completion`: The block invoked after dismissing the navigation alert. The [Bool](https://developer.apple.com/documentation/swift/bool) argument in the block indicates whether the template dismissed an alert.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dismissNavigationAlert(animated: Bool) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Displaying a Navigation Alert

- [present(navigationAlert:animated:)](present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [currentNavigationAlert](currentnavigationalert.md): The visible navigation alert.
- [CPNavigationAlert](../cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.

# dismissNavigationAlertAnimated:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the map template to dismiss the visable navigation alert.

## Declaration

```objectivec
- (void) dismissNavigationAlertAnimated:(BOOL) animated completion:(void (^)(BOOL dismissed)) completion;
```

## Parameters

- `animated`: Determines whether the system should animate the dismissal of the navigation alert. Set to [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal.
- `completion`: The block invoked after dismissing the navigation alert. The [Bool](https://developer.apple.com/documentation/swift/bool) argument in the block indicates whether the template dismissed an alert.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func dismissNavigationAlert(animated: Bool) async -> Bool
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Displaying a Navigation Alert

- [presentNavigationAlert:animated:](present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [currentNavigationAlert](currentnavigationalert.md): The visible navigation alert.
- [CPNavigationAlert](../cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.
