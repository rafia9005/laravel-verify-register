<template>
    <h1>hello world</h1>
</template>

<script>
import {Auth} from '../../api/auth'
export default {
    created() {
        Auth(this);
    },
}
</script>