> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilityremoteelement/init(identifier:hostpid:)](https://developer.apple.com/documentation/browserenginekit/beaccessibilityremoteelement/init(identifier:hostpid:))

# init(identifier:hostPid:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

Initializes and registers a remote element.

## Declaration

```swift
init(identifier: String, hostPid: pid_t)
```

## Parameters

- `identifier`: A unique ID that creates an element reference pair by connecting an accessibility element to its representation that the local process hosts. Set this parameter to a unique value per pair of element references.
- `hostPid`: The process ID of the host’s remote element process.

<a id="discussion"></a>

## Discussion

Don’t return an instance of this class from an object in your view hierarchy.

# initWithIdentifier:hostPid: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · visionOS 26.0+

Initializes and registers a remote element.

## Declaration

```objectivec
- (id) initWithIdentifier:(NSString *) identifier hostPid:(pid_t) hostPid;
```

## Parameters

- `identifier`: A unique ID that creates an element reference pair by connecting an accessibility element to its representation that the local process hosts. Set this parameter to a unique value per pair of element references.
- `hostPid`: The process ID of the host’s remote element process.

<a id="discussion"></a>

## Discussion

Don’t return an instance of this class from an object in your view hierarchy.
