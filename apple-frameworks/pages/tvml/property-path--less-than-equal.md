> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/property-path--less-than-equal](https://developer.apple.com/documentation/tvml/property-path--less-than-equal)

# {property-path}-less-than-equal

**Kind:** Article

Compares a value from a JSON file to a specified value to find out if the JSON value is less than or equal to the specified value.

<a id="Overview"></a>

## Overview

The `{property-path}-less-than-equal` query is used with data binding to determine whether one value is smaller than or equal to another. Bind a value from your JSON file to a variable associated with the query. If the `property-path` is less than or equal to the designated value, the element is processed.

For example, you want to notify a user that a movie has 24 hours or less left in the rental period. Add a `specialize` element that contains a `{property-path}-less-than-equal` query. If the `hoursLeft` variable is less than or equal to 24, color the title red.

```xml
<specialize state="({hoursLeft}-less-than-equal:24)">
    <title tag="title" style="color:red"/>
</specialize>
```
