> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderstringsearchrequest/desirednumberofresults](https://developer.apple.com/documentation/fileprovider/nsfileproviderstringsearchrequest/desirednumberofresults)

# desiredNumberOfResults (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

How many results the system is requesting. This is a hint to the extension, to help avoid unnecessary work. The extension may return more results than this.

## Declaration

```swift
var desiredNumberOfResults: Int { get }
```

# desiredNumberOfResults (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

How many results the system is requesting. This is a hint to the extension, to help avoid unnecessary work. The extension may return more results than this.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger desiredNumberOfResults;
```
