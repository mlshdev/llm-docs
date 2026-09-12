> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewheaderfooterview/init(reuseidentifier:)](https://developer.apple.com/documentation/uikit/uitableviewheaderfooterview/init(reuseidentifier:))

# init(reuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a header-footer view with the specified reuse identifier.

## Declaration

```swift
init(reuseIdentifier: String?)
```

## Parameters

- `reuseIdentifier`: A string used to identify the header or footer view if it’s to be reused by multiple sections. Pass `nil` if the view isn’t to be reused. You should use the same reuse identifier for all header or footer views of the same form.

<a id="return-value"></a>

## Return Value

An initialized [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Once set, you can’t change the reuse identifier for the returned view object.

## See Also

### Creating the view

- [init(coder:)](init%28coder_%29.md): Creates a header-footer view from data in an unarchiver.

# initWithReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a header-footer view with the specified reuse identifier.

## Declaration

```objectivec
- (instancetype) initWithReuseIdentifier:(NSString *) reuseIdentifier;
```

## Parameters

- `reuseIdentifier`: A string used to identify the header or footer view if it’s to be reused by multiple sections. Pass `nil` if the view isn’t to be reused. You should use the same reuse identifier for all header or footer views of the same form.

<a id="return-value"></a>

## Return Value

An initialized [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md) object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Once set, you can’t change the reuse identifier for the returned view object.

## See Also

### Creating the view

- [initWithCoder:](init%28coder_%29.md): Creates a header-footer view from data in an unarchiver.
