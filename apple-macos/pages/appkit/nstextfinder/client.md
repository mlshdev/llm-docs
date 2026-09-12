> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinder/client](https://developer.apple.com/documentation/appkit/nstextfinder/client)

# client (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The object that provides the target search string, find bar location, and feedback methods.

## Declaration

```swift
@IBOutlet unowned(unsafe) var client: (any NSTextFinderClient)? { get set }
```

<a id="Discussion"></a>

## Discussion

The `NSTextFinder` instance class must be associated with a client object that implements the NSTextFinderClient protocol in order to function. The client is responsible for providing the string to be searched, the location for the find bar, and the methods which control feedback to the user about the search results.

# client (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The object that provides the target search string, find bar location, and feedback methods.

## Declaration

```objectivec
@property (assign, nullable) id<NSTextFinderClient> client;
```

<a id="Discussion"></a>

## Discussion

The `NSTextFinder` instance class must be associated with a client object that implements the NSTextFinderClient protocol in order to function. The client is responsible for providing the string to be searched, the location for the find bar, and the methods which control feedback to the user about the search results.
