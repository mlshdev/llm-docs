> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/preferencesidentifier](https://developer.apple.com/documentation/webkit/webview-swift.class/preferencesidentifier)

# preferencesIdentifier (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The identifier of the receiver’s preferences.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
var preferencesIdentifier: String! { get set }
```

<a id="Discussion"></a>

## Discussion

It is fixed to the keys used to store the receiver’s preferences in the user defaults database. `WebView` objects can share instances of the `WebPreferences` class by using the same preferences identifier.

## See Also

### Related Documentation

- [autosaves](../webpreferences/autosaves.md): Deprecated. A Boolean that indicates whether or not the receiver’s attributes are automatically stored in the user defaults database.

### Getting and Setting Preferences

- [preferences](preferences.md): Deprecated. The receiver’s preferences.

# preferencesIdentifier (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The identifier of the receiver’s preferences.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * preferencesIdentifier;
```

<a id="Discussion"></a>

## Discussion

It is fixed to the keys used to store the receiver’s preferences in the user defaults database. `WebView` objects can share instances of the `WebPreferences` class by using the same preferences identifier.

## See Also

### Related Documentation

- [autosaves](../webpreferences/autosaves.md): Deprecated. A Boolean that indicates whether or not the receiver’s attributes are automatically stored in the user defaults database.

### Getting and Setting Preferences

- [preferences](preferences.md): Deprecated. The receiver’s preferences.
