> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsuserdefaultscontroller/init(defaults:initialvalues:)](https://developer.apple.com/documentation/appkit/nsuserdefaultscontroller/init(defaults:initialvalues:))

# init(defaults:initialValues:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an initialized NSUserDefaultsController object using the NSUserDefaults instance specified in `defaults` and the initial default values contained in the `initialValues` dictionary.

## Declaration

```swift
init(defaults: UserDefaults?, initialValues: [String : Any]?)
```

<a id="Discussion"></a>

## Discussion

If `defaults` is `nil`, the receiver uses `[NSUserDefaults standardUserDefaults]`.

This method is the designated initializer.

## See Also

### Initializing a user defaults controller

- [init(coder:)](init%28coder_%29.md)

# initWithDefaults:initialValues: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an initialized NSUserDefaultsController object using the NSUserDefaults instance specified in `defaults` and the initial default values contained in the `initialValues` dictionary.

## Declaration

```objectivec
- (instancetype) initWithDefaults:(NSUserDefaults *) defaults initialValues:(NSDictionary<NSString *,id> *) initialValues;
```

<a id="Discussion"></a>

## Discussion

If `defaults` is `nil`, the receiver uses `[NSUserDefaults standardUserDefaults]`.

This method is the designated initializer.

## See Also

### Initializing a user defaults controller

- [initWithCoder:](init%28coder_%29.md)
