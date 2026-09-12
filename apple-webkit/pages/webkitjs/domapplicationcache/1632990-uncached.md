> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/domapplicationcache/1632990-uncached](https://developer.apple.com/documentation/webkitjs/domapplicationcache/1632990-uncached)

# UNCACHED

**Interface language:** Data

**Framework:** WebKit JS  
**Availability:** Safari Desktop 4.0+ · Safari Mobile 2.1+

The object isn’t associated with an application cache. This can occur if the update process fails and there is no previous cache to revert to, or if there is no manifest file.

## Declaration

```
const unsigned short UNCACHED;
```

<a id="discussion"></a>

## Discussion

<a id="2556206"></a>

**Listing 1**

```javascript
const unsigned short UNCACHED = 0;
```
