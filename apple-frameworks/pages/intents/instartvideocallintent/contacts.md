> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintent/contacts](https://developer.apple.com/documentation/intents/instartvideocallintent/contacts)

# contacts (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The users to call.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
var contacts: [INPerson]? { get }
```

<a id="Discussion"></a>

## Discussion

Use the information in each [INPerson](../inperson.md) object to look for a matching contact in your app.

# contacts (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The users to call.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPerson *> * contacts;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPerson *> * contacts;
```

<a id="Discussion"></a>

## Discussion

Use the information in each [INPerson](../inperson.md) object to look for a matching contact in your app.
