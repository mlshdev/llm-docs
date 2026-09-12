> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webopenpanelresultlistener](https://developer.apple.com/documentation/webkit/webopenpanelresultlistener)

# WebOpenPanelResultListener (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebView` user interface delegates that implement the webView:runOpenPanelForFileButtonWithResultListener: method use the methods defined in this protocol to communicate with the listener object. The methods allow the delegate to send a cancel message, or set the selected file name.

## Declaration

```swift
protocol WebOpenPanelResultListener : NSObjectProtocol
```

## Topics

### Setting a File Name

- [chooseFilename(\_:)](webopenpanelresultlistener/choosefilename%28__%29.md): Deprecated. Displays a file open panel and returns the selected filename.
- [chooseFilenames(\_:)](webopenpanelresultlistener/choosefilenames%28__%29.md): Deprecated. Displays a file open panel and returns the multiple selected filenames.

### Cancelling a File Open Operation

- [cancel()](webopenpanelresultlistener/cancel%28%29.md): Deprecated. Invoked when a file open operation was cancelled.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# WebOpenPanelResultListener (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebView` user interface delegates that implement the webView:runOpenPanelForFileButtonWithResultListener: method use the methods defined in this protocol to communicate with the listener object. The methods allow the delegate to send a cancel message, or set the selected file name.

## Declaration

```objectivec
@protocol WebOpenPanelResultListener <NSObject>
```

## Topics

### Setting a File Name

- [chooseFilename:](webopenpanelresultlistener/choosefilename%28__%29.md): Deprecated. Displays a file open panel and returns the selected filename.
- [chooseFilenames:](webopenpanelresultlistener/choosefilenames%28__%29.md): Deprecated. Displays a file open panel and returns the multiple selected filenames.

### Cancelling a File Open Operation

- [cancel](webopenpanelresultlistener/cancel%28%29.md): Deprecated. Invoked when a file open operation was cancelled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
