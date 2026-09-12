> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences/init(identifier:)](https://developer.apple.com/documentation/webkit/webpreferences/init(identifier:))

# init(identifier:) (Swift)

**Framework:** WebKit  
**Kind:** Initializer  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns an initialized `WebPreferences` object, creating one if it does not exist.

## Declaration

```swift
init!(identifier anIdentifier: String!)
```

## Parameters

- `anIdentifier`: A unique identifier for the [WebPreferences](../webpreferences.md) object

<a id="return-value"></a>

## Return Value

A newly initialized [WebPreferences](../webpreferences.md) object with the identifier; if an existing `WebPreferences` object with that identifier exists, it is returned instead.

<a id="Discussion"></a>

## Discussion

The `anIdentifier` argument should be unique—it is prepended to the keys used to store the receiver’s attributes in the user defaults database. [WebView](../webview-swift.class.md) objects can share a [WebPreferences](../webpreferences.md) object by using the same preferences identifier.

Typically, you do not invoke this method directly. Instead, you set the preferences identifier by sending a [preferencesIdentifier](../webview-swift.class/preferencesidentifier.md) message to your WebView object. This method is the designated initializer for the WebPreferences class.

## See Also

### Related Documentation

- [identifier](identifier.md): Deprecated. The receiver’s identifier.

# initWithIdentifier: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Returns an initialized `WebPreferences` object, creating one if it does not exist.

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) anIdentifier;
```

## Parameters

- `anIdentifier`: A unique identifier for the [WebPreferences](../webpreferences.md) object

<a id="return-value"></a>

## Return Value

A newly initialized [WebPreferences](../webpreferences.md) object with the identifier; if an existing `WebPreferences` object with that identifier exists, it is returned instead.

<a id="Discussion"></a>

## Discussion

The `anIdentifier` argument should be unique—it is prepended to the keys used to store the receiver’s attributes in the user defaults database. [WebView](../webview-swift.class.md) objects can share a [WebPreferences](../webpreferences.md) object by using the same preferences identifier.

Typically, you do not invoke this method directly. Instead, you set the preferences identifier by sending a [preferencesIdentifier](../webview-swift.class/preferencesidentifier.md) message to your WebView object. This method is the designated initializer for the WebPreferences class.

## See Also

### Related Documentation

- [identifier](identifier.md): Deprecated. The receiver’s identifier.
