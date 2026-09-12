> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpcontactcallbutton/init(handler:)](https://developer.apple.com/documentation/carplay/cpcontactcallbutton/init(handler:))

# init(handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button that invokes a handler when the user taps it.

## Declaration

```swift
init(handler: ((CPButton) -> Void)? = nil)
```

## Parameters

- `handler`: The closure that the button invokes when the user taps it.

<a id="return-value"></a>

## Return Value

A new contact directions button that invokes its handler when the user taps it.

<a id="Discussion"></a>

## Discussion

The button displays a system image that communicates its function.

# initWithHandler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a button that invokes a handler when the user taps it.

## Declaration

```objectivec
- (instancetype) initWithHandler:(void (^)(CPButton *contactButton)) handler;
```

## Parameters

- `handler`: The closure that the button invokes when the user taps it.

<a id="return-value"></a>

## Return Value

A new contact directions button that invokes its handler when the user taps it.

<a id="Discussion"></a>

## Discussion

The button displays a system image that communicates its function.
