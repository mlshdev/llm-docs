> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboardsegue/init(identifier:source:destination:)](https://developer.apple.com/documentation/uikit/uistoryboardsegue/init(identifier:source:destination:))

# init(identifier:source:destination:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a storyboard segue object for use in performing a segue.

## Declaration

```swift
init(identifier: String?, source: UIViewController, destination: UIViewController)
```

## Parameters

- `identifier`: The identifier you want to associate with this particular instance of the segue. You can use this identifier to differentiate one type of segue from another at runtime.
- `source`: The view controller visible at the start of the segue.
- `destination`: The view controller to display after the completion of the segue.

<a id="return-value"></a>

## Return Value

An initialized segue object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for segue objects. If you subclass [UIStoryboardSegue](../uistoryboardsegue.md), you can override this method and perform any custom initialization in your implementation. Your implementation should call `super` first and then proceed if that method doesn’t return `nil`.

# initWithIdentifier:source:destination: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a storyboard segue object for use in performing a segue.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier source:(UIViewController *) source destination:(UIViewController *) destination;
```

## Parameters

- `identifier`: The identifier you want to associate with this particular instance of the segue. You can use this identifier to differentiate one type of segue from another at runtime.
- `source`: The view controller visible at the start of the segue.
- `destination`: The view controller to display after the completion of the segue.

<a id="return-value"></a>

## Return Value

An initialized segue object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for segue objects. If you subclass [UIStoryboardSegue](../uistoryboardsegue.md), you can override this method and perform any custom initialization in your implementation. Your implementation should call `super` first and then proceed if that method doesn’t return `nil`.
