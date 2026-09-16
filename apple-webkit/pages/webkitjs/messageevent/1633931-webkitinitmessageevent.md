> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkitjs/messageevent/1633931-webkitinitmessageevent

# webkitInitMessageEvent

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 9.0+ · Safari Mobile 9.0+

## Declaration

```
void webkitInitMessageEvent(
    optional DOMString typeArg, 
    optional boolean canBubbleArg, 
    optional boolean cancelableArg, 
    optional any dataArg, 
    optional USVString originArg, 
    optional DOMString lastEventIdArg, 
    optional, 
    optional sequence <MessagePort> messagePorts
);
```
