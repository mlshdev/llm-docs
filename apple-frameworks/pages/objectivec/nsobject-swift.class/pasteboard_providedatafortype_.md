> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/pasteboard:providedatafortype:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/pasteboard:providedatafortype:)

# pasteboard:provideDataForType:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Implemented by an owner object to provide promised data.

## Declaration

```objectivec
- (void) pasteboard:(NSPasteboard *) sender provideDataForType:(NSPasteboardType) type;
```

## Parameters

- `sender`: The pasteboard that requires the specified data for a paste operation.
- `type`: The type of data the owner object must provide.

<a id="Discussion"></a>

## Discussion

The receiver should have been previously declared in a [declareTypes:owner:](https://developer.apple.com/documentation/appkit/nspasteboard/declaretypes%28_:owner:%29) message.

The requested data should be written to `sender` using the [setData:forType:](https://developer.apple.com/documentation/appkit/nspasteboard/setdata%28_:fortype:%29), [setPropertyList:forType:](https://developer.apple.com/documentation/appkit/nspasteboard/setpropertylist%28_:fortype:%29), or [setString:forType:](https://developer.apple.com/documentation/appkit/nspasteboard/setstring%28_:fortype:%29) method. The [pasteboard:provideDataForType:](pasteboard_providedatafortype_.md) messages may also be sent to the owner when the application is shut down through an application’s [terminate:](https://developer.apple.com/documentation/appkit/nsapplication/terminate%28_:%29) method. This is the method that is invoked in response to a Quit command. Thus the user can copy something to the pasteboard, quit the application, and still paste the data that was copied. A [pasteboard:provideDataForType:](pasteboard_providedatafortype_.md) message is sent only if the specified type of data has not already been supplied to the pasteboard. Instead of writing all data types when the cut or copy operation is done, an application can choose to implement this method to provide the data for certain types only when they are requested.

If an application writes data to the pasteboard in the richest, and therefore most preferred, type at the time of a cut or copy operation, its [pasteboard:provideDataForType:](pasteboard_providedatafortype_.md) method can simply read that data from the pasteboard, convert it to the requested type, and write it back to the pasteboard as the new type.

## See Also

### Related Documentation

- [Pasteboard Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PasteboardGuide106/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008099)
