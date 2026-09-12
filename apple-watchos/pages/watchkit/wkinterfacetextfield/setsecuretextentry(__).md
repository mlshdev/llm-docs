> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetextfield/setsecuretextentry(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/setsecuretextentry(_:))

# setSecureTextEntry(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Determines whether the text field hides the text entered by the user.

## Declaration

```swift
func setSecureTextEntry(_ secureTextEntry: Bool)
```

<a id="Discussion"></a>

## Discussion

Pass [true](https://developer.apple.com/documentation/swift/true) to help keep passwords and other secure data private. When you enable secure text entry, the system displays a series of dots instead of the text entered by the user.

## See Also

### Configuring the Control

- [setEnabled(\_:)](setenabled%28__%29.md): Enables or disables the text field.

# setSecureTextEntry: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Determines whether the text field hides the text entered by the user.

## Declaration

```objectivec
- (void) setSecureTextEntry:(BOOL) secureTextEntry;
```

<a id="Discussion"></a>

## Discussion

Pass [true](https://developer.apple.com/documentation/swift/true) to help keep passwords and other secure data private. When you enable secure text entry, the system displays a series of dots instead of the text entered by the user.

## See Also

### Configuring the Control

- [setEnabled:](setenabled%28__%29.md): Enables or disables the text field.
