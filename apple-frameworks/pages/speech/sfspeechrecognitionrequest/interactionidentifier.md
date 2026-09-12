> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionrequest/interactionidentifier](https://developer.apple.com/documentation/speech/sfspeechrecognitionrequest/interactionidentifier)

# interactionIdentifier (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An identifier string that you use to describe the type of interaction associated with the speech recognition request.

> Not used anymore

## Declaration

```swift
var interactionIdentifier: String? { get set }
```

<a id="discussion"></a>

## Discussion

If different parts of your app have different speech recognition needs, you can use this property to identify the part of your app that is making each request. For example, if one part of your app lets users speak phone numbers and another part lets users speak street addresses, consistently identifying the part of the app that makes a recognition request may help improve the accuracy of the results.

# interactionIdentifier (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0) · macOS 10.15+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

An identifier string that you use to describe the type of interaction associated with the speech recognition request.

> Not used anymore

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * interactionIdentifier;
```

<a id="discussion"></a>

## Discussion

If different parts of your app have different speech recognition needs, you can use this property to identify the part of your app that is making each request. For example, if one part of your app lets users speak phone numbers and another part lets users speak street addresses, consistently identifying the part of the app that makes a recognition request may help improve the accuracy of the results.
