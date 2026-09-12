> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemprovider/init(placeholderitem:)](https://developer.apple.com/documentation/uikit/uiactivityitemprovider/init(placeholderitem:))

# init(placeholderItem:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a provider object with the specified placeholder data.

## Declaration

```swift
init(placeholderItem: Any)
```

## Parameters

- `placeholderItem`: An object that can stand in for the actual object you plan to create. The contents of the object may be empty but the class of the object must match the class of the object you plan to provide later.

<a id="return-value"></a>

## Return Value

An initialized provider object.

# initWithPlaceholderItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a provider object with the specified placeholder data.

## Declaration

```objectivec
- (instancetype) initWithPlaceholderItem:(id) placeholderItem;
```

## Parameters

- `placeholderItem`: An object that can stand in for the actual object you plan to create. The contents of the object may be empty but the class of the object must match the class of the object you plan to provide later.

<a id="return-value"></a>

## Return Value

An initialized provider object.
