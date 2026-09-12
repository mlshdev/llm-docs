> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/init()](https://developer.apple.com/documentation/foundation/userdefaults/init())

# init() (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new defaults object and initializes it with the app’s current settings.

## Declaration

```swift
convenience init()
```

<a id="discussion"></a>

## Discussion

Use this method to create a new defaults object to manage the app’s settings. If you add a domain using the [addSuite(named:)](addsuite%28named_%29.md) method, the returned object retrieves values in that domain in addition to the standard ones. Custom domains remain in the search list until you remove them or release the object. When you write setting values using this object, it writes them to the current app’s settings.

## See Also

### Creating a user defaults object

- [standard](standard.md): The shared defaults object for the current app.
- [init(suiteName:)](init%28suitename_%29.md): Creates a new defaults object and initializes it with the settings from the specified database.

# init (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new defaults object and initializes it with the app’s current settings.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="discussion"></a>

## Discussion

Use this method to create a new defaults object to manage the app’s settings. If you add a domain using the [addSuiteNamed:](addsuite%28named_%29.md) method, the returned object retrieves values in that domain in addition to the standard ones. Custom domains remain in the search list until you remove them or release the object. When you write setting values using this object, it writes them to the current app’s settings.

## See Also

### Creating a user defaults object

- [standardUserDefaults](standard.md): The shared defaults object for the current app.
- [initWithSuiteName:](init%28suitename_%29.md): Creates a new defaults object and initializes it with the settings from the specified database.
