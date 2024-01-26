import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
        plugins: [react(), svgr()],
        define: {
            "import.meta.env.MODE": JSON.stringify(mode),
        }
    }
});
