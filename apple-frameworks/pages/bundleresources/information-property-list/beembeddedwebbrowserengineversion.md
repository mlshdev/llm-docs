> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/beembeddedwebbrowserengineversion](https://developer.apple.com/documentation/bundleresources/information-property-list/beembeddedwebbrowserengineversion)

# BEEmbeddedWebBrowserEngineVersion

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A string version number for the alternative browser engine that your app embeds.

## Details

`BEEmbeddedWebBrowserEngineVersion`

<a id="discussion"></a>

## Discussion

If your app isn’t a browser app, but embeds an alternative browser engine, add this property to your app’s target in Xcode and set the value to the version of the alternative browser engine you use.

Supply a version that matches this regular expression: `(v(ersion)?\s?)?\d+(\.\d+)*`.

For more information, see [Creating browser extensions in Xcode](https://developer.apple.com/documentation/browserenginekit/creating-browser-extensions-in-xcode).

## See Also

### Alternative browser engines

- [BEEmbeddedWebBrowserEngine](beembeddedwebbrowserengine.md): A string name of the alternative browser engine that your app embeds.
