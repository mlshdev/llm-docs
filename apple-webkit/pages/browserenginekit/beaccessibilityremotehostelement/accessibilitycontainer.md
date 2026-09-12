> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilityremotehostelement/accessibilitycontainer](https://developer.apple.com/documentation/browserenginekit/beaccessibilityremotehostelement/accessibilitycontainer)

# accessibilityContainer (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

The remote host’s parent Accessibility element.

## Declaration

```swift
weak var accessibilityContainer: AnyObject? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to an Accessibility element’s parent view in your app’s main process.

# accessibilityContainer (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

The remote host’s parent Accessibility element.

## Declaration

```objectivec
@property (nonatomic, weak) id accessibilityContainer;
```

<a id="discussion"></a>

## Discussion

Set this property to an Accessibility element’s parent view in your app’s main process.
