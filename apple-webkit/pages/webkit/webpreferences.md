> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpreferences](https://developer.apple.com/documentation/webkit/webpreferences)

# WebPreferences (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

WebPreferences encapsulates the preferences you can change per WebView object. These preferences include font, text encoding, and image settings. Normally a WebView object uses the standard preferences returned by the [standard()](webpreferences/standard%28%29.md) class method. However, you can modify the preferences for individual WebView instances too. Use the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) WebView method to change a WebView object’s preferences, or to share preferences between WebView objects. Use the [autosaves](webpreferences/autosaves.md) method to specify if the preferences object should be automatically saved to the user defaults database.

## Declaration

```swift
class WebPreferences
```

<a id="overview"></a>

## Overview

WebPreferences also manages the font preferences for a web view. You can set custom font families for each of the primary web font styles (standard, serif, sans-serif, cursive, and fantasy) as well as their font sizes. The font size preferences alter the display font sizes in a certain way. If the HTML or CSS in the web view’s content specifies font sizes in a relative fashion (such as `font size=-1` in HTML or `font-size: medium` in CSS), the default font size settings (set by the font size methods prefaced with “default”) have an effect. They do not have an effect for font sizes specified absolutely. The values specified by the minimum font size settings (set by the font size methods prefaced with “minimum”) override all the HTML and CSS font size definitions, and so have an effect on the entirety of the content. The values specified by the minimum logical font size settings (set by the font size methods prefaced with “minimumLogical”) affect all relative font size declarations for HTML and CSS, but also override any CSS font size declarations in the content, whether they are relative or absolute.

The font size for a web view is different than its logical font size. The minimum logical font size, for example, is the absolute minimum size at which the font will display onscreen. This is meant to be a functional boundary and not a style boundary. For example, the default value for a web view’s minimum logical font size is 9 points, because typical web content looks good in macOS at font sizes of 9 point and above. The constraint assures that web content will always look good in a web view. If you know that your content will look good only at 12 points or above, you should change the minimum font size to 12 points and leave the minimum *logical* font size alone. This will assure that your content will never display at sizes less than 12 points, but the functional font size boundary of the web view will remain at 9 points to prevent any chance of displaying unnecessarily small text.

## Topics

### Getting the Standard Preferences

- [standard()](webpreferences/standard%28%29.md): Deprecated. Returns the standard set of preferences that may be used by all WebView objects.

### Initializing Preferences

- [init(identifier:)](webpreferences/init%28identifier_%29.md): Deprecated. Returns an initialized `WebPreferences` object, creating one if it does not exist.

### Getting the Identifier

- [identifier](webpreferences/identifier.md): Deprecated. The receiver’s identifier.

### Saving Preferences to the User Defaults Database

- [autosaves](webpreferences/autosaves.md): Deprecated. A Boolean that indicates whether or not the receiver’s attributes are automatically stored in the user defaults database.

### Enabling Java

- [isJavaEnabled](webpreferences/isjavaenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows Java.

### Enabling JavaScript

- [isJavaScriptEnabled](webpreferences/isjavascriptenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows JavaScript.
- [javaScriptCanOpenWindowsAutomatically](webpreferences/javascriptcanopenwindowsautomatically.md): Deprecated. A Boolean that indicates whether or not the web view allows JavaScript to open windows automatically.

### Enabling Plug-ins

- [arePlugInsEnabled](webpreferences/arepluginsenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows plug-ins.

### Enabling Style Sheets

- [userStyleSheetEnabled](webpreferences/userstylesheetenabled.md): Deprecated. A Boolean that indicates whether or not user style sheets are enabled in the web view.

### Getting and Setting Fonts

- [cursiveFontFamily](webpreferences/cursivefontfamily.md): Deprecated. The cursive font family of the web view.
- [fantasyFontFamily](webpreferences/fantasyfontfamily.md): Deprecated. The fantasy font family of the web view.
- [fixedFontFamily](webpreferences/fixedfontfamily.md): Deprecated. The fixed font family of the web view.
- [sansSerifFontFamily](webpreferences/sansseriffontfamily.md): Deprecated. The sans serif font family of the web view.
- [serifFontFamily](webpreferences/seriffontfamily.md): Deprecated. The serif font family of the web view.
- [standardFontFamily](webpreferences/standardfontfamily.md): Deprecated. The standard font family of the web view.

### Getting and Setting Font Sizes

- [defaultFixedFontSize](webpreferences/defaultfixedfontsize.md): Deprecated. The default fixed font size of the web view.
- [defaultFontSize](webpreferences/defaultfontsize.md): Deprecated. The default font size of the web view.
- [minimumFontSize](webpreferences/minimumfontsize.md): Deprecated. The minimum font size of the web view.
- [minimumLogicalFontSize](webpreferences/minimumlogicalfontsize.md): Deprecated. The minimum logical font size of the web view.

### Getting and Setting Text Encoding

- [defaultTextEncodingName](webpreferences/defaulttextencodingname.md): Deprecated. The default text encoding of the web view.

### Getting and Setting Incremental Rendering

- [suppressesIncrementalRendering](webpreferences/suppressesincrementalrendering.md): Deprecated. A Boolean that indicates whether incremental rendering should be suppressed.

### Handling Images

- [allowsAnimatedImageLooping](webpreferences/allowsanimatedimagelooping.md): Deprecated. A Boolean that indicates whether or not the receiver allows animated images to loop.
- [allowsAnimatedImages](webpreferences/allowsanimatedimages.md): Deprecated. A Boolean that indicates whether or not the receiver allows animated images.
- [loadsImagesAutomatically](webpreferences/loadsimagesautomatically.md): Deprecated. A Boolean that indicates whether or not the web view allows images to be loaded automatically.

### Printing Backgrounds

- [shouldPrintBackgrounds](webpreferences/shouldprintbackgrounds.md): Deprecated. A Boolean that indicates whether or not the web view should include backgrounds when printing.

### Enabling Private Browsing

- [privateBrowsingEnabled](webpreferences/privatebrowsingenabled.md): Deprecated. A Boolean that indicates whether or not private browsing is enabled.

### Controlling User Focus

- [tabsToLinks](webpreferences/tabstolinks.md): Deprecated. A Boolean that indicates whether or not the tab key will focus links.

### Caching

- [usesPageCache](webpreferences/usespagecache.md): Deprecated. A Boolean that indicates whether the web views associated with the receiver should use the shared page cache.
- [cacheModel](webpreferences/cachemodel.md): Deprecated. The cache model for the web views associated with the receiver.

### Constants

- [WebCacheModel](webcachemodel.md): Deprecated. Specifies the caching model for a web view.

### Notifications

- [WebPreferencesChanged](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/webpreferenceschanged): Deprecated. Posted when the web preference settings are changed.

### Initializers

- [init(coder:)](webpreferences/init%28coder_%29.md): Deprecated.

### Instance Properties

- [allowsAirPlayForMediaPlayback](webpreferences/allowsairplayformediaplayback.md): Deprecated.
- [userStyleSheetLocation](webpreferences/userstylesheetlocation.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Setting Up a Web View (Legacy)

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [load(\_:)](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebEditingDelegate](webeditingdelegate.md): Deprecated.
- [WebUIDelegate](webuidelegate.md): Deprecated. Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface–related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. Delegates that display more than one web view per window, for example, need to implement some of these methods to handle that case. The default implementation assumes one window per web view, so non-conventional user interfaces might implement a user interface delegate.

# WebPreferences (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

WebPreferences encapsulates the preferences you can change per WebView object. These preferences include font, text encoding, and image settings. Normally a WebView object uses the standard preferences returned by the [standardPreferences](webpreferences/standard%28%29.md) class method. However, you can modify the preferences for individual WebView instances too. Use the [preferencesIdentifier](webview-swift.class/preferencesidentifier.md) WebView method to change a WebView object’s preferences, or to share preferences between WebView objects. Use the [autosaves](webpreferences/autosaves.md) method to specify if the preferences object should be automatically saved to the user defaults database.

## Declaration

```objectivec
@interface WebPreferences : NSObject
```

<a id="overview"></a>

## Overview

WebPreferences also manages the font preferences for a web view. You can set custom font families for each of the primary web font styles (standard, serif, sans-serif, cursive, and fantasy) as well as their font sizes. The font size preferences alter the display font sizes in a certain way. If the HTML or CSS in the web view’s content specifies font sizes in a relative fashion (such as `font size=-1` in HTML or `font-size: medium` in CSS), the default font size settings (set by the font size methods prefaced with “default”) have an effect. They do not have an effect for font sizes specified absolutely. The values specified by the minimum font size settings (set by the font size methods prefaced with “minimum”) override all the HTML and CSS font size definitions, and so have an effect on the entirety of the content. The values specified by the minimum logical font size settings (set by the font size methods prefaced with “minimumLogical”) affect all relative font size declarations for HTML and CSS, but also override any CSS font size declarations in the content, whether they are relative or absolute.

The font size for a web view is different than its logical font size. The minimum logical font size, for example, is the absolute minimum size at which the font will display onscreen. This is meant to be a functional boundary and not a style boundary. For example, the default value for a web view’s minimum logical font size is 9 points, because typical web content looks good in macOS at font sizes of 9 point and above. The constraint assures that web content will always look good in a web view. If you know that your content will look good only at 12 points or above, you should change the minimum font size to 12 points and leave the minimum *logical* font size alone. This will assure that your content will never display at sizes less than 12 points, but the functional font size boundary of the web view will remain at 9 points to prevent any chance of displaying unnecessarily small text.

## Topics

### Getting the Standard Preferences

- [standardPreferences](webpreferences/standard%28%29.md): Deprecated. Returns the standard set of preferences that may be used by all WebView objects.

### Initializing Preferences

- [initWithIdentifier:](webpreferences/init%28identifier_%29.md): Deprecated. Returns an initialized `WebPreferences` object, creating one if it does not exist.

### Getting the Identifier

- [identifier](webpreferences/identifier.md): Deprecated. The receiver’s identifier.

### Saving Preferences to the User Defaults Database

- [autosaves](webpreferences/autosaves.md): Deprecated. A Boolean that indicates whether or not the receiver’s attributes are automatically stored in the user defaults database.

### Enabling Java

- [javaEnabled](webpreferences/isjavaenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows Java.

### Enabling JavaScript

- [javaScriptEnabled](webpreferences/isjavascriptenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows JavaScript.
- [javaScriptCanOpenWindowsAutomatically](webpreferences/javascriptcanopenwindowsautomatically.md): Deprecated. A Boolean that indicates whether or not the web view allows JavaScript to open windows automatically.

### Enabling Plug-ins

- [plugInsEnabled](webpreferences/arepluginsenabled.md): Deprecated. A Boolean that indicates whether or not the web view allows plug-ins.

### Enabling Style Sheets

- [userStyleSheetEnabled](webpreferences/userstylesheetenabled.md): Deprecated. A Boolean that indicates whether or not user style sheets are enabled in the web view.

### Getting and Setting Fonts

- [cursiveFontFamily](webpreferences/cursivefontfamily.md): Deprecated. The cursive font family of the web view.
- [fantasyFontFamily](webpreferences/fantasyfontfamily.md): Deprecated. The fantasy font family of the web view.
- [fixedFontFamily](webpreferences/fixedfontfamily.md): Deprecated. The fixed font family of the web view.
- [sansSerifFontFamily](webpreferences/sansseriffontfamily.md): Deprecated. The sans serif font family of the web view.
- [serifFontFamily](webpreferences/seriffontfamily.md): Deprecated. The serif font family of the web view.
- [standardFontFamily](webpreferences/standardfontfamily.md): Deprecated. The standard font family of the web view.

### Getting and Setting Font Sizes

- [defaultFixedFontSize](webpreferences/defaultfixedfontsize.md): Deprecated. The default fixed font size of the web view.
- [defaultFontSize](webpreferences/defaultfontsize.md): Deprecated. The default font size of the web view.
- [minimumFontSize](webpreferences/minimumfontsize.md): Deprecated. The minimum font size of the web view.
- [minimumLogicalFontSize](webpreferences/minimumlogicalfontsize.md): Deprecated. The minimum logical font size of the web view.

### Getting and Setting Text Encoding

- [defaultTextEncodingName](webpreferences/defaulttextencodingname.md): Deprecated. The default text encoding of the web view.

### Getting and Setting Incremental Rendering

- [suppressesIncrementalRendering](webpreferences/suppressesincrementalrendering.md): Deprecated. A Boolean that indicates whether incremental rendering should be suppressed.

### Handling Images

- [allowsAnimatedImageLooping](webpreferences/allowsanimatedimagelooping.md): Deprecated. A Boolean that indicates whether or not the receiver allows animated images to loop.
- [allowsAnimatedImages](webpreferences/allowsanimatedimages.md): Deprecated. A Boolean that indicates whether or not the receiver allows animated images.
- [loadsImagesAutomatically](webpreferences/loadsimagesautomatically.md): Deprecated. A Boolean that indicates whether or not the web view allows images to be loaded automatically.

### Printing Backgrounds

- [shouldPrintBackgrounds](webpreferences/shouldprintbackgrounds.md): Deprecated. A Boolean that indicates whether or not the web view should include backgrounds when printing.

### Enabling Private Browsing

- [privateBrowsingEnabled](webpreferences/privatebrowsingenabled.md): Deprecated. A Boolean that indicates whether or not private browsing is enabled.

### Controlling User Focus

- [tabsToLinks](webpreferences/tabstolinks.md): Deprecated. A Boolean that indicates whether or not the tab key will focus links.

### Caching

- [usesPageCache](webpreferences/usespagecache.md): Deprecated. A Boolean that indicates whether the web views associated with the receiver should use the shared page cache.
- [cacheModel](webpreferences/cachemodel.md): Deprecated. The cache model for the web views associated with the receiver.

### Constants

- [WebCacheModel](webcachemodel.md): Deprecated. Specifies the caching model for a web view.

### Notifications

- [WebPreferencesChangedNotification](webpreferenceschangednotification.md): Deprecated. Posted when the web preference settings are changed.

### Instance Properties

- [allowsAirPlayForMediaPlayback](webpreferences/allowsairplayformediaplayback.md): Deprecated.
- [userStyleSheetLocation](webpreferences/userstylesheetlocation.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)

## See Also

### Setting Up a Web View (Legacy)

- [WebView](webview-swift.class.md): Deprecated. `WebView` is the core view class in the WebKit framework that manages interactions between the `WebFrame` and `WebFrameView` classes. To embed web content in your application, you just create a `WebView` object, attach it to a window, and send a [loadRequest:](webframe/load%28__%29-47p2s.md) message to its main frame.
- [WebEditingDelegate](webeditingdelegate.md): Deprecated.
- [WebUIDelegate](webuidelegate.md): Deprecated. Web view user interface delegates implement this protocol to control the opening of new windows, augment the behavior of default menu items displayed when the user clicks elements, and perform other user interface–related tasks. These methods can be invoked as a result of handling JavaScript or other plug-in content. Delegates that display more than one web view per window, for example, need to implement some of these methods to handle that case. The default implementation assumes one window per web view, so non-conventional user interfaces might implement a user interface delegate.
