> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddcarkeypassconfiguration/password](https://developer.apple.com/documentation/passkit/pkaddcarkeypassconfiguration/password)

# password (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

A one-time password that the vehicle manufacturer provides.

## Declaration

```swift
var password: String { get set }
```

<a id="Discussion"></a>

## Discussion

When creating a digital car key, the vehicle manufacturer emails the user a one-time password to verify their identity. Set this property’s value to that password before you use the configuration to initialize [PKAddSecureElementPassViewController](../pkaddsecureelementpassviewcontroller.md), and PassKit verifies that the passwords match as it creates the pass.

# password (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

A one-time password that the vehicle manufacturer provides.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * password;
```

<a id="Discussion"></a>

## Discussion

When creating a digital car key, the vehicle manufacturer emails the user a one-time password to verify their identity. Set this property’s value to that password before you use the configuration to initialize [PKAddSecureElementPassViewController](../pkaddsecureelementpassviewcontroller.md), and PassKit verifies that the passwords match as it creates the pass.
