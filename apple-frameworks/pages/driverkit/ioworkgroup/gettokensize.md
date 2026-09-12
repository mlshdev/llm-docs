> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioworkgroup/gettokensize](https://developer.apple.com/documentation/driverkit/ioworkgroup/gettokensize)

# GetTokenSize

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
size_t GetTokenSize();
```

<a id="return-value"></a>

## Return Value

Workgroup token size

<a id="discussion"></a>

## Discussion

Get the size of the workgroup token.

Join() and Leave() require the caller to pass a token. This token should be allocated by the caller, and freed when no longer needed. Use this method to determine how much memory to allocate for the token.
