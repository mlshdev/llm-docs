> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/shared()](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/shared())

# shared() (Swift)

**Framework:** Quick Look UI  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the shared Quick Look preview panel instance.

## Declaration

```swift
class func shared() -> QLPreviewPanel!
```

<a id="return-value"></a>

## Return Value

The shared Quick Look preview panel instance for the application.

<a id="Discussion"></a>

## Discussion

This method creates the panel if it doesn’t exist yet. Use [sharedPreviewPanelExists()](sharedpreviewpanelexists%28%29.md) if you want to determine whether the panel exists without creating it.

## See Also

### Accessing the Shared Panel

- [sharedPreviewPanelExists()](sharedpreviewpanelexists%28%29.md): Returns a Boolean value that indicates whether the system has created a shared Quick Look preview panel.

# sharedPreviewPanel (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Type Method  
**Availability:** macOS 10.6+

Returns the shared Quick Look preview panel instance.

## Declaration

```objectivec
+ (QLPreviewPanel *) sharedPreviewPanel;
```

<a id="return-value"></a>

## Return Value

The shared Quick Look preview panel instance for the application.

<a id="Discussion"></a>

## Discussion

This method creates the panel if it doesn’t exist yet. Use [sharedPreviewPanelExists](sharedpreviewpanelexists%28%29.md) if you want to determine whether the panel exists without creating it.

## See Also

### Accessing the Shared Panel

- [sharedPreviewPanelExists](sharedpreviewpanelexists%28%29.md): Returns a Boolean value that indicates whether the system has created a shared Quick Look preview panel.
