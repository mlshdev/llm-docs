> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/becontextmenuconfiguration/fulfill(using:)](https://developer.apple.com/documentation/browserenginekit/becontextmenuconfiguration/fulfill(using:))

# fulfill(using:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Supplies a contextual menu configuration to the system.

## Declaration

```swift
func fulfill(using configuration: UIContextMenuConfiguration?) -> Bool
```

## Parameters

- `configuration`: The calculated configuration for the contextual menu. Pass `nil` to cancel menu presentation.

<a id="return-value"></a>

## Return Value

`true` if you fulfill the configuration within the system’s time window; `false` otherwise.

<a id="discussion"></a>

## Discussion

When the system calls your delegate’s [contextMenuInteraction(\_:configurationForMenuAtLocation:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction%28_:configurationformenuatlocation:%29) method to request a menu configuration, return a [BEContextMenuConfiguration](../becontextmenuconfiguration.md) instance, then call this method as soon as you can to provide the actual configuration. The system times out the request after a short delay to keep the UI responsive.

If you don’t call this method before the timeout, the system discards the contextual menu as if you passed `nil`. When you fulfill the configuration, your [UIContextMenuInteractionDelegate](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate) uses the `configuration` object you supply to configure the contextual menu — not the [BEContextMenuConfiguration](../becontextmenuconfiguration.md) instance you pass to [contextMenuInteraction(\_:configurationForMenuAtLocation:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction%28_:configurationformenuatlocation:%29).

# fulfillUsingConfiguration: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Supplies a contextual menu configuration to the system.

## Declaration

```objectivec
- (BOOL) fulfillUsingConfiguration:(UIContextMenuConfiguration *) configuration;
```

## Parameters

- `configuration`: The calculated configuration for the contextual menu. Pass `nil` to cancel menu presentation.

<a id="return-value"></a>

## Return Value

`true` if you fulfill the configuration within the system’s time window; `false` otherwise.

<a id="discussion"></a>

## Discussion

When the system calls your delegate’s [contextMenuInteraction:configurationForMenuAtLocation:](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction%28_:configurationformenuatlocation:%29) method to request a menu configuration, return a [BEContextMenuConfiguration](../becontextmenuconfiguration.md) instance, then call this method as soon as you can to provide the actual configuration. The system times out the request after a short delay to keep the UI responsive.

If you don’t call this method before the timeout, the system discards the contextual menu as if you passed `nil`. When you fulfill the configuration, your [UIContextMenuInteractionDelegate](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate) uses the `configuration` object you supply to configure the contextual menu — not the [BEContextMenuConfiguration](../becontextmenuconfiguration.md) instance you pass to [contextMenuInteraction:configurationForMenuAtLocation:](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction%28_:configurationformenuatlocation:%29).
