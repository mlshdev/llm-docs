> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfciso7816responseapdu/payload](https://developer.apple.com/documentation/corenfc/nfciso7816responseapdu/payload)

# payload

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A data object that contains the response data.

## Declaration

```swift
var payload: Data?
```

<a id="Discussion"></a>

## Discussion

The data may be empty even if [sendCommand(apdu:resultHandler:)](../nfciso7816tag/sendcommand%28apdu_resulthandler_%29.md) completes successfully.

## See Also

### Response Data

- [statusWord1](statusword1.md): The SW1 command-processing status byte.
- [statusWord2](statusword2.md): The SW2 command-processing status byte.
