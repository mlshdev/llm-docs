> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447859-skloaddefaultextractorplugins](https://developer.apple.com/documentation/coreservices/1447859-skloaddefaultextractorplugins)

# SKLoadDefaultExtractorPlugIns() (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Tells Search Kit to use the Spotlight metadata importers.

## Declaration

```swift
func SKLoadDefaultExtractorPlugIns()
```

<a id="discussion"></a>

## Discussion

The Spotlight metadata importers determine the `kMDItemTextContent` property for each document passed to the [SKIndexAddDocument(\_:\_:\_:\_:)](1444897-skindexadddocument.md) function.

Call the `SKLoadDefaultExtractorPlugIns` function once at application launch to tell Search Kit to use the Spotlight metadata importers. The function [SKIndexAddDocument(\_:\_:\_:\_:)](1444897-skindexadddocument.md) will then use Spotlight’s importers to extract the text from supported files and place that text into an index, leaving the markup behind.

<a id="1681000"></a>

### Version-Notes

In versions of macOS prior to OS X v10.4, Search Kit used its own set of default text extractor plug-ins. The file types supported by Search Kit’s default text extractor plug-ins were:

- plaintext
- PDF
- HTML
- RTF
- Microsoft Word (.doc)

# SKLoadDefaultExtractorPlugIns (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+

Tells Search Kit to use the Spotlight metadata importers.

## Declaration

```objectivec
void SKLoadDefaultExtractorPlugIns(void);
```

<a id="discussion"></a>

## Discussion

The Spotlight metadata importers determine the `kMDItemTextContent` property for each document passed to the [SKIndexAddDocument](1444897-skindexadddocument.md) function.

Call the `SKLoadDefaultExtractorPlugIns` function once at application launch to tell Search Kit to use the Spotlight metadata importers. The function [SKIndexAddDocument](1444897-skindexadddocument.md) will then use Spotlight’s importers to extract the text from supported files and place that text into an index, leaving the markup behind.

<a id="1681000"></a>

### Version-Notes

In versions of macOS prior to OS X v10.4, Search Kit used its own set of default text extractor plug-ins. The file types supported by Search Kit’s default text extractor plug-ins were:

- plaintext
- PDF
- HTML
- RTF
- Microsoft Word (.doc)
