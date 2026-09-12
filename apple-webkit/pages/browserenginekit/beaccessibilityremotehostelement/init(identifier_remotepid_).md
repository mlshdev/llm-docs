> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilityremotehostelement/init(identifier:remotepid:)](https://developer.apple.com/documentation/browserenginekit/beaccessibilityremotehostelement/init(identifier:remotepid:))

# init(identifier:remotePid:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

Initializes a remote element in the hosting process.

## Declaration

```swift
init(identifier: String, remotePid: pid_t)
```

## Parameters

- `identifier`: A unique ID that connects a remote element to its hosted version in the local process. Set this parameter to a unique value per pair of element references.
- `remotePid`: The process ID for the hosted remote element’s process.

# initWithIdentifier:remotePid: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

Initializes a remote element in the hosting process.

## Declaration

```objectivec
- (id) initWithIdentifier:(NSString *) identifier remotePid:(pid_t) remotePid;
```

## Parameters

- `identifier`: A unique ID that connects a remote element to its hosted version in the local process. Set this parameter to a unique value per pair of element references.
- `remotePid`: The process ID for the hosted remote element’s process.
