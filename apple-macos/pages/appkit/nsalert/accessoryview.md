> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/accessoryview](https://developer.apple.com/documentation/appkit/nsalert/accessoryview)

# accessoryView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The alert’s accessory view.

## Declaration

```swift
var accessoryView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The [NSAlert](../nsalert.md) class places the accessory view between the informative text or suppression checkbox (if present) and the response buttons. Before you change the location of the accessory view, first call the [layout()](layout%28%29.md) method.

[alertStyle](alertstyle.md) shows an example of adding an accessory view to an alert. [buttons](buttons.md) shows the alert generated.

Listing 1. Adding an accessory view to an alert

```objc
NSTextView *accessory = [[NSTextView alloc] initWithFrame:NSMakeRect(0,0,200,15)];
NSFont *font = [NSFont systemFontOfSize:[NSFont systemFontSize]];
NSDictionary *textAttributes = [NSDictionary dictionaryWithObject:font forKey:NSFontAttributeName];
[accessory insertText:[[NSAttributedString alloc] initWithString:@"Text in accessory view."
                                                      attributes:textAttributes]];
[accessory setEditable:NO];
[accessory setDrawsBackground:NO];
 
NSAlert *alert = [[NSAlert alloc] init];
alert.messageText = @"Message text.";
[alert setInformativeText:@"Informative text."];
alert.accessoryView = accessory;
[alert runModal];
[alert release];
```

![](https://developer.apple.com/images/com.apple.appkit/media-1965585@2x.png)

## See Also

### Configuring alerts

- [layout()](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlert.Style](style.md): The set of alert styles to style alerts in your app.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.

# accessoryView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The alert’s accessory view.

## Declaration

```objectivec
@property (strong, nullable) NSView * accessoryView;
```

<a id="Discussion"></a>

## Discussion

The [NSAlert](../nsalert.md) class places the accessory view between the informative text or suppression checkbox (if present) and the response buttons. Before you change the location of the accessory view, first call the [layout](layout%28%29.md) method.

[alertStyle](alertstyle.md) shows an example of adding an accessory view to an alert. [buttons](buttons.md) shows the alert generated.

Listing 1. Adding an accessory view to an alert

```objc
NSTextView *accessory = [[NSTextView alloc] initWithFrame:NSMakeRect(0,0,200,15)];
NSFont *font = [NSFont systemFontOfSize:[NSFont systemFontSize]];
NSDictionary *textAttributes = [NSDictionary dictionaryWithObject:font forKey:NSFontAttributeName];
[accessory insertText:[[NSAttributedString alloc] initWithString:@"Text in accessory view."
                                                      attributes:textAttributes]];
[accessory setEditable:NO];
[accessory setDrawsBackground:NO];
 
NSAlert *alert = [[NSAlert alloc] init];
alert.messageText = @"Message text.";
[alert setInformativeText:@"Informative text."];
alert.accessoryView = accessory;
[alert runModal];
[alert release];
```

![](https://developer.apple.com/images/com.apple.appkit/media-1965585@2x.png)

## See Also

### Configuring alerts

- [layout](layout%28%29.md): Specifies that the alert must do immediate layout instead of lazily just before display.
- [alertStyle](alertstyle.md): Indicates the alert’s severity level.
- [NSAlertStyle](style.md): The set of alert styles to style alerts in your app.
- [showsHelp](showshelp.md): Specifies whether the alert has a help button.
- [helpAnchor](helpanchor.md): The alert’s HTML help anchor.
- [delegate](delegate.md): The alert’s delegate.
